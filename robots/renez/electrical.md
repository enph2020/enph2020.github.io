---
layout: single
title: Electrical Design
permalink: /robots/renez/electrical/
sidebar:
  nav: robots/renez
---

Sensors and circuits used:
- 4 [QRD1114][] for tape following
- 2 [QSD124][]  for infrared detection
- 2 DC Geared Barber Colman motors
- 1 [Tinah][] microcontroller
- 2 Infrared Detection circuits
- 2 H-bridges

![][circuits]

### Microcontroller Board

![][Tinah pic]

reneZ uses a Tinah board as its microcontroller. The Tinah is similar to an arduino, but was created for the ENPH 253 class to provide more functionality for our robot. Some of the features include:

- 4 DC Motor outputs
- 3 Servo outputs
- 2 buttons and 2 knobs for on board control
- 2x16 LCD screen

More can be found [on the ENPH website][Tinah].

### Motor Control Circuit

![][H-bridge]

The motor outputs on the Tinah board can only provide a DC motor 9V and 1A. We used Geared Barber Colman motors which needs ~12V and 1.5A to operate. In order to get enough power to these motors we needed to make a separate H-bridge. A H-bridge is used in order to control the speed and direction of a DC motor, essential for driving our robot.

### Signal Processing Circuit

![][IR circuit]

During the competition our robot needed to detect infrared beams of light at two frequencies, 10Khz and 1Khz. In order to achieve this we used a signal processing circuit which would take the corresponding frequency and amplify it, while attenuating other frequencies.

[qrd1114]: https://www.sparkfun.com/datasheets/BOT/QRD1114.pdf
[qsd124]: http://www.mouser.com/ds/2/149/QSD124-890000.pdf
[tinah]: http://projectlab.engphys.ubc.ca/enph253-2017/tinah-2017/
[circuits]: /assets/images/robots/renez/circuits.jpg
[tinah pic]: /assets/images/robots/renez/tinah.jpg
[h-bridge]: /assets/images/robots/renez/H-bridge_schematic.png
[ir circuit]: /assets/images/robots/renez/IR-Detect.jpg
