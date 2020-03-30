import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class HelloWorld extends Component {

//  componentDidMount() {
//    const rclnodejs = require('rclnodejs');

//    rclnodejs.init().then(() => {
//      let String = rclnodejs.require('std_msgs').msg.String;
//      const node = rclnodejs.createNode('publisher_example_node');
//      const publisher = node.createPublisher(String, 'topic');
//      let msg = new String();
//    
//      setInterval(function() {
//        const str = 'Hello ROS2.0';
//        msg.data = str;
//        publisher.publish(msg);
//      }, 1000);
//    
//      rclnodejs.spin(node);
//    });
//  }

  render () {
    const gridStyle = {
        justifyContent: 'center',
        height: '100vh',
    };

    const itemStyle = {
      textAlign: 'center',
      margin: '8px',
    };

    return (
    <Grid container style={gridStyle} justify="center" spacing={0}>
      <Grid item xs={12} style={itemStyle}>
        Hello World
      </Grid>
    </Grid>
    );
  }
}

export default HelloWorld;
