---
layout: default
title: "Mathematical Intuition of Jensen's Inequality"
date: 2025-01-10
---

## Motivation

Jensen's Inequality is a cornerstone of mathematical analysis and probability theory, with wide-ranging applications in fields such as information theory, statistical physics, and machine learning. Personally, my interest in Jensen's Inequality stems from its use in the derivation of the training objective for the reverse process in the original Diffusion paper ([link to paper](https://arxiv.org/pdf/2006.11239)). Fully understanding this concept is key to grasping the mathematical intuition behind diffusion models. As part of a series on diffusion processes, this post aims to break down Jensen's Inequality and its intuition.

If you’re motivated by practical applications, the Wikipedia entry on Jensen’s Inequality provides an extensive list of applications ([link](https://en.wikipedia.org/wiki/Jensen%27s_inequality#Applications_and_special_cases)), ranging from risk aversion in economics to variational Bayesian methods.

---

## Definition

Jensen's Inequality captures the relationship between a convex function and the expectation of a random variable. For a convex function \( \phi \) and a set of weights \( \{a_i\} \) satisfying \( a_i \geq 0 \) and \( \sum a_i = 1 \), the finite form of Jensen’s Inequality is:

\[
\phi \left( \sum_{i=1}^n a_i x_i \right) \leq \sum_{i=1}^n a_i \phi(x_i).
\]

If \( \phi \) is concave, the inequality is reversed. The equality holds if and only if \( x_1 = x_2 = \dots = x_n \) or \( \phi \) is linear on the interval containing \( \{x_i\} \).

---

## Intuition Behind Jensen’s Inequality

To develop an intuition, think of a convex function as one that “stretches” values away from its average. For example, consider a probability distribution of a random variable \( X \) and a convex function \( \phi \):

- Compute \( \mathbb{E}[X] \), the mean of \( X \).
- Map this mean through \( \phi \), giving \( \phi(\mathbb{E}[X]) \).
- Compare it to the expected value of the transformed variable, \( \mathbb{E}[\phi(X)] \).

Jensen’s Inequality tells us that \( \phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)] \). The intuition is that the convex function amplifies deviations of \( X \) from its mean, making \( \mathbb{E}[\phi(X)] \) larger than \( \phi(\mathbb{E}[X]) \).

---

## Graphical Representation

Imagine a curve \( \phi(x) \) that is convex. For any two points \( x_1 \) and \( x_2 \), the secant line connecting \( (x_1, \phi(x_1)) \) and \( (x_2, \phi(x_2)) \) lies above the curve. Weighted averages of \( x_1 \) and \( x_2 \) map to points on this secant line when passed through \( \phi \), while their convex combination maps below or on the line when evaluated directly. This graphical property underpins the inequality.

---

## Applications

### 1. **Probability and Statistics**
   - In probability, Jensen’s Inequality applies to expectations. For a random variable \( X \) and a convex function \( \phi \):
     \[
     \phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)].
     \]
     This property is foundational in variational Bayesian methods, where the inequality helps bound difficult-to-compute integrals.

### 2. **Information Theory**
   - Applying \( \phi(x) = -\log(x) \) to probability distributions leads to Gibbs’ Inequality, which underlies concepts like entropy and Kullback-Leibler divergence.

### 3. **Statistical Physics**
   - For \( \phi(x) = e^x \), Jensen’s Inequality gives:
     \[
     e^{\mathbb{E}[X]} \leq \mathbb{E}[e^X].
     \]
     This is a critical result in understanding partition functions and free energy.

### 4. **Risk Aversion in Economics**
   - Concave utility functions \( u(x) \) model risk aversion. Jensen’s Inequality ensures that a risk-averse individual prefers the expected value of a gamble over the gamble itself:
     \[
     u(\mathbb{E}[X]) \geq \mathbb{E}[u(X)].
     \]

---

## Example: Arithmetic-Mean/Geometric-Mean Inequality

The AM-GM inequality states that for positive numbers \( x_1, x_2, \dots, x_n \):
\[
\frac{x_1 + x_2 + \dots + x_n}{n} \geq \sqrt[n]{x_1 x_2 \dots x_n}.
\]

This follows directly from Jensen’s Inequality with \( \phi(x) = \log(x) \), a concave function. Applying it yields:
\[
\log \left( \frac{x_1 + x_2 + \dots + x_n}{n} \right) \geq \frac{1}{n} \sum_{i=1}^n \log(x_i).
\]
Exponentiating both sides gives the AM-GM inequality.

---

## Closing Thoughts

Jensen’s Inequality is a deceptively simple yet profoundly powerful tool in mathematics. Its versatility makes it indispensable across disciplines, from machine learning to economics. By understanding its intuition and practical uses, you unlock a deeper appreciation for the beauty and utility of convexity in mathematical analysis.

Stay tuned for future posts exploring its role in diffusion models and other advanced topics!!!

