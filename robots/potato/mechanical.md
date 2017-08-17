---
layout: single
title: Mechanical Design
permalink: /robots/potato/mechanical/
sidebar:
  nav: robots/potato
---

The main principle is to make things simple, fast and modular. All mechanical parts are simple in design and are quickly manufactured by laser cutting hardwood. Each mechanical component is detachable and is separate from other components except for mounting points.

## [](){:name="chassis"} Chassis

![][chassis final]

![][chassis front]

The top platform serves as mounting positions for mechanical components. Namely the claw, box and lifting mechanism. The processor board is mounted on the back for convienient access.

![][chassis electrical]

Circuit components go underneath the top platform, providing protection and easy access.

## [](){:name="claw"} Claw

![][claw]

Simplistic two arm claw driven by servos, mounted onto a support tower and pivots about big servo.

<iframe src="https://www.youtube.com/embed/lddlhldNePk" allowfullscreen></iframe>

## [](){:name="lift"} Lifting Mechanism

The original idea of the lifting mechanism was given the specification of being able to raise the platform (~350g) 20 cm high by using only one HK15138 Servo to prevent too much current draw. A basic pulley system combined with scissor jack was implemented.

<iframe src="https://www.youtube.com/embed/hudy5wKKXcA" allowfullscreen></iframe>

Due to large horizontal space taken by the pulley system, we decided to use a four bar linkage driven by two HK15138 Servos at the end.

<iframe src="https://www.youtube.com/embed/eLR8YD-Sv1I" allowfullscreen></iframe>

Four bar linkage system with gear ratio of 1:1.5 is able to lift 350g (including basket weight) ~15cm.

[chassis final]: /assets/images/robots/potato/FinalPrototypeCAD.png
[chassis front]: /assets/images/robots/potato/ChassiFrontView.JPG
[chassis electrical]: /assets/images/robots/potato/Elec.JPG
[claw]: /assets/images/robots/potato/claw.JPG
