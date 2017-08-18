---
layout: single
title: Software Design
permalink: /robots/mvp/software/
sidebar:
  nav: robots/mvp
---

The software in our robot is publically available [on GitHub][]. The logic is based on a simple state diagram:

1. The robot continuously records the current alarm gate status.
2. The user presses the start button.
3. The robot follows tape up until the alarm gate.
4. The robot waits until it is able to make it past the alarm gate without triggering the alarm.
5. The robot follows tape up until the tub circle.
6. The robot executes a manoeuvre to get onto the tub circle.
7. The robot follows tape on the tub circle and grabs an agent at every intersection.
8. After seeing 8 intersections, the robot executes a manoeuvre to drive parallel to the edge of the ramp.
9. The robot raises the elevator, with the bucket containing all the rescued agents.
10. The robot drives straight, and the bucket with the agents naturally slides off onto the zipline.

[on github]: https://github.com/eyqs/enph253/
