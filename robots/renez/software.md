---
layout: single
title: Software Design
permalink: /robots/renez/software/
sidebar:
  nav: robots/renez
---

### [GitHub Repo][]

### Class Overview

![][class]

This is how we structured our robot to run the competition course. It is structured from high level classes to low level environment classes. The controller is the main class of the robot. It is in charge of handling the finite state machine and communication in between components. The driver controls the drive train. It uses QRD sensors to follow on black tape using PID correction. IR detector is used for reading infrared signals. The claw class is used to rotate and position the claw using 3 servo motors.

### Competition Flowchart

![][flowchart]

This is a flowchart overview of the tasks needed to be accomplished during the competition.

### Finite State Machine

![][fsm]

We saw using a finite state machine was the easiest and most robust way to accomplish all of the tasks in the competition, instead of using some complex system. We used a finite state machine to model each component of the competition in our robot. We broke the competition up into 4 parts:

- Driving to the gate: This state accounted for driving up to the gate and detecting when the gate is on/off
- Driving to agents: During this state, we needed to adjust speed and PID correction to get the fastest speed up the hill.
- Agent collection: This state is for going around the circle and collecting each of the agents using the claw.
- Agent dropoff: This state is for driving using infrared sensors (instead of tape), raising the collection box, and delivering the agents down the zipline.

[github repo]: https://github.com/ZenereneZ/reneZ
[class]: /assets/images/robots/renez/Class.jpg
[flowchart]: /assets/images/robots/renez/Flowchart.jpg
[fsm]: /assets/images/robots/renez/state-machine.jpg
