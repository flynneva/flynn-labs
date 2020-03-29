var express = require('express');
var router = express.Router();

const rclnodejs = require('rclnodejs');

rclnodejs.init().then(() => {
  let String = rclnodejs.require('std_msgs').msg.String;
  const node = rclnodejs.createNode('publisher_example_node');
  const publisher = node.createPublisher(String, 'topic');
  let msg = new String();

  setInterval(function() {
    const str = 'Hello ROS2.0';
    msg.data = str;
    publisher.publish(msg);
  }, 1000);

  rclnodejs.spin(node);
});

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;
