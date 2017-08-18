---
layout: single
title: Structure
permalink: /robots/mvp/structure/
sidebar:
  nav: robots/mvp
---

Summary of chassis

## [](){:name="chassis"} Chassis

The chassis is made from nine panels of laser-cut high-density fibreboard, press-fit with box joints along their edges and rigidly fastened with #4-40 bolts and nuts hot-glued into T-slot joints. The chassis underwent two major revisions during the prototyping process to reach this final result.


Our first chassis prototype resembled a Humvee, with a cabin in the back for the electronics, an empty hood in the front, and a bucket to hold the agents on top of the hood, with the [wheels and drivetrain] near the centre of mass. We built this prototype mere days after the start of construction, mainly to get an immediate feel for the robot's form factor.

![The complete first chassis with rear mounted drivetrain][original chassis]

For the first major revision, we made three major modifications:

- Box joints alone could not hold the chassis together, so we glued nuts into T-slot joints and bolted the panels in place;
- There was too much empty room in the chassis, so we significantly decreased its length;
- We made many more holes to bolt the front skid and QRD sensors in different places, to manipulate the TINAH externally, etc.


Our first major revision was structurally sound and would have worked well in the competition. However, a radical redesign completely changed the mechanics of the [zipline][] attachment procedure&mdash;for the second major revision, we flipped the robot backwards!


We transformed the Humvee into a pickup truck, with a cabin in the front for the electronics, a bed at the back for the wheels and drivetrain, and a bucket to hold the agents on top of the bed.  This way, the bucket can slide off the back of the truck without lowering the elevator, unlike all other robots in the competition.


This redesign also slightly reduced the chassis length, because the previously empty hood now became a drivetrain-filled bed. We also added more holes for the LCD screen and external buttons.

However, the wheels were no longer close to the robot's centre of mass. We tried various designs for the front skid to compensate for this, but the weight imbalance was ultimately not an issue.

Finally, with a bit of extra time on our hands, we rasterized a dazzle design for the final chassis.

![Front view of the MVP raster styling][original chassis]
OB
## [](){:name="ebay"} eBay

The electronics bay, or eBay, is the compartment in the chassis that holds most of the electronics. Throughout the multiple revisions of the chassis, the eBay changed its location but not its general shape and size.


We were the only team to put the TINAH fully inside the chassis, and the TINAH was the first major constraint on the eBay, where we squeezed the TINAH in a corner fixed with standoffs to a quarter-inch middle structural panel.

The other major constraint on the eBay was the location of the [circuit boards][] and batteries. We drilled holes in the circuit boards and bolted all of them to the side walls, which ultimately gave us enough room to put our batteries on either side.


## [](){:name="mounts"} Mounts

We used multiple mounts to securely attach various components to the robot, including the drivetrain, the tape sensors, the infrared sensors, and the batteries.


The motor mounts for the drivetrain and elevator are 3D-printed from PLA plastic. With the bolts untightened, the DC motors can slide along the slots to adjust the meshing of their gears.


The 3D-printed tape sensor mounts each hold a QRD1114 phototransistor that measures the reflectivity of the material underneath, allowing the robot to distinguish between black tape and white surface. #4-40 bolts attach the mounts to the bottom of the chassis inside countersunk holes.


Similarly, the infrared sensor mounts each hold a QSD124 phototransistor that measures the infrared radiation towards it, allowing the robot to distinguish between [1 kHz and 10 kHz infrared pulses][ir-filter]. We 3D-printed these mounts at an angle to compensate for the curve of the competition track before the alarmed gate, so that the infrared sensors point directly at the infrared beacon when we stop right in front of the gate.


Finally, we made battery mounts out of various materials just to keep the batteries in place, but they were not altogether necessary.

[original chassis]: /assets/images/robots/IMG_20170707_172256.jpg
[final raster]: /assets/images/robots/mvp/DSC_0173.JPG
[wheels and drivetrain]: /robots/mvp/components/#drivetrain
[zipline]: /robots/mvp/components/#zipline
[circuit boards]: /robots/mvp/electrical/#routing
[ir-filter]: /robots/mvp/electrical/#ir-filter
