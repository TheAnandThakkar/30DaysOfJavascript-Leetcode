# This literature has been copied from leetcode canvas

### 2621. Sleep

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

### Examples

```bash
Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```

```bash
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
```
