---
layout: single
title: Electrical Design
permalink: /robots/mvp/electrical/
sidebar:
  nav: robots/mvp
---

## [](){:name="h-bridges"} H-Bridges

H-bridges are necessary for bi-directional motor control. The TINAH has built-in H-bridges, but they cannot handle the current load needed to drive a 4-kilogram robot around the competition surface in 35 seconds, so we had to solder our own.

Since nothing else could be changed, we decided to minimize the size of our H-bridges, and came up with a compact breadboard diagram of the traditional H-bridge design.

However, the modified design using Zener diodes was much smaller, as it used Zener diodes instead of BJTs, so we decided to only make those.

Male header pins on the H-bridges fit into female header pins on the drivetrain circuit board for a fully modular H-bridge replacement system.

Ultimately, we never replaced any H-bridges, because all of them worked, all the time!

## [](){:name="routing"} Routing

The [electronics bay][] is rather small, as we decided to keep all the electronics wholly inside the chassis, both to protect them against water damage and for aesthetic appeal.

Therefore, creating properly organized connections between boards was a necessity. The heart of our circuitry is the routing board, which connects circuit boards between the TINAH and each other.

We made copious use of MTA connectors and ribbon cables to easily connect and disconnect various connections all at once. We also used shielded cables both for shielding and for the sake of neatness.

Finally, the power board separates the various voltage levels in the robot in a star pattern. In particular, the two 8-volt batteries to the infrared filter circuit were completely separated from everything else in an effort to reduce noise.

## [](){:name="ir-filter"} Infrared Filter

The infrared filter circuit takes in infrared beacon signals from a QSD124 phototransistor and determines whether the infrared beacon is pulsing at 1 kHz or 10 kHz.

The circuit uses two band-pass filters and two peak detectors to feed analog signals into the TINAH&mdash;one at 1 kHZ and one at 10 kHz. We made two infrared filter circuits in order to better triangulate the location of the infrared beacon.

Ultimately, we did not need to use the infrared beacon location, but we kept both infrared filter circuits just in case. The whole circuit board fit right inside the electronics bay.

## [](){:name="encoders"} Encoders

We tried to use rotary encoders to get more information about the velocity and displacement of our robot over time. Unfortunately, there was too much noise in the circuit to get any useful signals, and ultimately we did not need to use the encoders either.

[angry purple skid]: /assets/images/robots/mvp/angry_purple_skid.jpg
[angry white skid]: /assets/images/robots/mvp/angry_white_skid.jpg
[electronics bay]: /robots/mvp/structure/#ebay
