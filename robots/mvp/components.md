---
layout: single
title: Components
permalink: /robots/mvp/components/
sidebar:
  nav: robots/mvp
---

MVP consists of several, modular components which were often developed in isolation and then integrated once they were completed and tested. The core componentsm, their function and their design and manufacture are discussed here.

## [](){:name="drivetrain"} Drivetrain

The drivetrain consists of two Barber-Colman DC electric motors, powered using a 4S LiPo battery and controlled using a TINAH microcontroller board. The motors are held in place using two 3D-printed brackets. Initially, a 3:1 gear ratio was chosen but later a 2:1 gear ratio was found to be more optimal. Given the simple design of the drivetrain setup, this switch was quickly completed. The wheels were made of hardboard coated with rubber for better traction.

>> DRIVETRAIN PICTURE <<

![A purple 3D-printed hemispherical skid for the front of our robot. When flipped upside-down, the countersunk boltholes resemble eyes on a face, so angry eyebrows and a mouth were drawn on it with a black sharpie. The skid is held against a backdrop of MVP members reattaching the arm to the chassis.][angry purple skid]

## [](){:name="aev"} Agent Evacuation Vehicle (AEV)

The agent evacuation vehicle loosely sits on two forks of the elevator. It is stored such that once the elevator is raised, the hook of the agent evacuation vehicle can be driven against the zipline and the bucket passively falls off of the robot and slides down the zipline. The zipline attachment was made of two 3D printed cones which were press-fit onto ball bearings and attached to the bucket using a threaded rod. The entire evacuation vehicle was large enough that it could store all pets and was designed such that it is accessible from any arm mounting position.

>> AEV PICTURE <<

## [](){:name="elevator"} Elevator

The elevator is required to raise the basket, including rescued pets, to the height of the zipline. Because the competition is timed, the elevator has to drive relatively fast, in order to minimize the delay between picking up the last pet and attaching the basket to the zipline. A geared DC motor, capable of providing the required torque to lift the bucket and pets, was used to raise the elevator. A gear on the shaft of the motor directly drove a rack and pinion attached to the elevator. This setup proved to be robust and reliable and was not changed after its initial implementation.

>> ELEVATOR PICTURE <<

## [](){:name="arm"} Arm

The arm is responsible for picking up the pets and placing them in the bucket as efficiently as possible. The arms have two degrees of freedom. They can rotate about the normal axis and clamp. The degrees of freedom are controlled using two servo motors which allowed for quick, precise and consistent behaviour. In addition, the arm had to be capable of grabbing pets on either side of the robot, depending on which track the robot was competing on. To allow for quick switches between tracks, a press-fit mount for the arm was devised which gives us the ability to move the arm from one side of the robot to the other in less than thirty seconds. The software can be toggled to select the appropriate competition track.

>> ARM PICTURE <<

[angry purple skid]: /assets/images/robots/mvp/angry_purple_skid.jpg
