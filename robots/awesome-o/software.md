---
layout: single
title: Software Design
permalink: /robots/awesome-o/software/
sidebar:
  nav: robots/awesome-o
---

We designed our software based on a system where the robot progress through a set of states, each with a unique protocol. Our robot had 14 states, each of which handled a specific portion of the course. All software was written for Arduino, a C++ based language for microcontrollers.

1. Tape follow to IR gate
2. Wait for IR signal
3. Tape follow (before ramp)
4. Tape follow (up ramp)
5. Adjust claw (at top of ramp)
6.Enter circle
7. Tape follow in circle
8. Retrieve agent
9. Navigate circle to exit point
10. Exit circle
11. Lift Basket
12. Approach Zipline
13. Lower Basket
14. Reverse and finish run



## [](){:name="state"} State Diagram

<img src="/assets/images/robots/awesome-o/state_diagram.jpg" alt="Drawing" align ="middle"/>
