# 服务的状态

含义：

    为了保留程序的一些数据或是上下文。

    程序调用的结果。

    服务组合下的上下文。

    服务的配置。

    e.g 每一次请求的状态，用户登录Session


无状态实现方式：

    特点：可以随意扩展或删除节点

    本质：转移责任

    把状态保存到其他的地方。e.g. Redis ，MySQL ，高可用的强一致性的存储ZooKeeper/Etcd ，分布式文件系统

拓展：

   面向对象是将数据和方法放一起，无状态是将数据和方法分离。（存算分离）

   无状态的服务需要我们把数据同步到不同的节点上，而有状态的服务通过 Sticky Session 做数据分片。

