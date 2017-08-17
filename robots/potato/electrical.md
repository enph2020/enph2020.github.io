---
layout: single
title: Electrical Design
permalink: /robots/potato/electrical/
sidebar:
  nav: robots/potato
---

The main electrical component for this robot was IR sensors, H-bridges, and power rails to run all active components.

![][ir detector]

The purpose of IR was to know when the gate is unalarmed.

![][ir diagram]

IR light is initially sensed by phototransistor, QSD124. DC Offset block allows us to remove the Offset from the raw signal. Amplification Block allows us to amplify the signal. Filteration Block allows us to cut out the all undesired frequency. Peak Detection Block allows us only singal at peak amplitude.

[ir detector]: /assets/images/robots/potato/FirstIRDetector.jpg
[ir diagram]: /assets/images/robots/potato/IRSensor_Diagram.PNG
