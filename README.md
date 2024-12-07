# React useEffect Cleanup Function Missing Return Statement

This example demonstrates a common mistake in React's `useEffect` hook: omitting the return statement in the cleanup function.  This can lead to memory leaks, especially when using timers or subscriptions.

## Problem
The `setInterval` function is called within the `useEffect` hook without a proper cleanup function.  When the component unmounts, the interval keeps running, potentially causing a memory leak.

## Solution
The correct way is to return a cleanup function from the `useEffect` hook. This function will be executed before the component unmounts or when the effect's dependencies change, allowing you to cancel the interval.