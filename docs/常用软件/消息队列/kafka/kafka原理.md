---
title: kafka原理
date: 2025-06-17 15:16:07
author: Navyum
tags: 
 - kafka
categories: 
 - 消息队列
 - 常用软件

article: true
index: true

headerDepth: 2
sticky: false
star: true
icon: logos:kafka-icon
---

### 整体架构：
<img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/09d7819af5b62fff56e36721d01d7c4f.png" width =60% >

### 高性能：
#### 减少资源竞争：
* 将消息按照业务拆分到多个`topic`。减少生产者和消费者对topic的读、写竞争
* 将topic再拆分为多个`partition`。每个消费者负责一个partition
<img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/f8284857339d397d22154713ddd2a9ae.png" width =60% >
<img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/4e5f3f34a51e479142bca13f96b9c579.png" width =60% >

#### 使用的高性能技术：
* PageCache 内核缓冲区
* 磁盘顺序写
* 零拷技术
* 批量处理
* 拉模式消费消息，由消费者自行控制

### 扩展性：
* 横向扩展，从单个`broker`变成多个，提高CPU、内存上限
* 如何拆分？
    * kafka 按照partition粒度，将topic对应的多个partition分散到多个broker中
    * 这样一个broker拥有多个topic的部分partition数据
    * **存疑？kafka集群的扩容如何进行？**
    <img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/2f88899b52b6ed6dc5ae53e81de587b8.png" width =60% >

### 高可用：
* kafka使用replication机制，按照partition粒度，设置replicas副本，这样 partition 就有了主、从的职责区分
* Leader负责应付生产者和消费者的`读写请求`，而Follower只管同步Leader的消息，做数据备份
* 如何做故障转移：
    * 将Leader partition 和 Follower partition分散到不同的broker中
    * 某个broker故障时，通过zookeeper进行协商出新的Leader partition，实现故障转移
    <img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/ec462fd29aa03e8143bc24d8dcd21f8b.png" width =60% >

### 持久化、过期策略：
* 持久化：将内存中的数据存到磁盘
* 过期：
* 写入过程：
    * 生产者决定数据产生到集群的哪个 partition 中
    * 每一条消息都是以（key， value）格式，Key 是由生产者发送数据传入，同一个 key 的消息可以保证只发送到同一个 partition
* ** 如何持久化**：
* ** 如何做主从同步**：
* 物理存储：
    * `Topic`中的多个 partition 以`文件夹`的形式保存，序号从0递增
    * 消息有序写入Segment（段）文件
    * `Partition`文件下有多个segment（xxx.index，xxx.log）
    * `Segment`大小固定，写满时滚动写入新Segment，新Segment按照最后一条消息的偏移量命名
    * <topic_name>/<partition_id>/<segment_id>

### 消费者组：
* 同组内如何消费：
    * 组内的消费者与topic的某个partition绑定消费
    * 消费者消费时，通过offset偏移进行消费位置的定位
* 组件如何消费：
    * 组与组之间的消费互不影响，新加的组可以从头开始消费
<img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/6502720c0591ca52d8decde6e0db329f.png" width =60% >

### 消息的有序消费：
* 方式1：设置1个Topic只对应1个Partition。并发能力变差。
* 方式2：指定消息对应的`topic`, `partition`, `key`, `data`（数据）4 个参数中的前三个一致

### 消息的不丢失：ACK
* 生产者 -> kafka：因为send是异步的，消息send之后，生产者通过get获取消息状态
* kafka -> 消费者：关闭消费者的自动提交offset，在消费后主动提交offset

### 分布式协商组件zookeeper：
* zookeeper 负责管理 broker、partition等组件状态信息
* 定期和broker通信，获取整个kafka集群的状态
* 进行Leader选举
<img src="https://raw.staticdn.net/Navyum/imgbed/pic/IMG/5767625df0abde9c4e8277f158e8f23d.png" width =60% >