# Expo Linking.getInitialURL() Inconsistent Null Return

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where the function intermittently returns `null` despite a deep link successfully opening the application. This makes reliable deep link handling challenging.

## Problem

The `Linking.getInitialURL()` method is supposed to return the initial URL that launched the app. However, in certain scenarios (often seemingly random), it returns `null`, even when a deep link clearly opened the application. This lack of consistent behavior and absence of informative error messages makes debugging difficult.

## Reproduction

The `bug.js` file contains a minimal reproduction of the issue.  Run the app, open a deep link, and observe the inconsistent return value of `getInitialURL()`.

## Solution (bugSolution.js)

The proposed solution involves implementing more robust error handling and potentially using a combination of `getInitialURL` and `addEventListener` to ensure that the initial URL is correctly captured.