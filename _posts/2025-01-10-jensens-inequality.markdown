---
layout: post
title: "Mathematical Intuition of Jensen's Inequality"
date: 2025-01-10
categories: [Mathematics, Probability, Analysis]
tags: [Jensen's Inequality, Convexity, Diffusion Models]
---

# **Mathematical Intuition of Jensen's Inequality**

Jensen's Inequality is a cornerstone of mathematical analysis and probability theory, with wide-ranging applications in fields like **information theory**, **statistical physics**, and **machine learning**. 

This post dives into the intuition behind Jensen's Inequality. My interest in this inequality stems from its pivotal role in understanding **diffusion models**, specifically in deriving the training objective for the reverse process in the original Diffusion paper ([paper link](https://arxiv.org/pdf/2006.11239)). 

For a broader perspective, check out the **Wikipedia entry on Jensen’s Inequality** ([link](https://en.wikipedia.org/wiki/Jensen%27s_inequality#Applications_and_special_cases)), which details its applications, including **risk aversion**, **variational Bayesian methods**, and more.

---

## **Definition**

Jensen's Inequality relates a convex function to the expectation of a random variable. 

For a convex function \( \phi \) and weights \( \{a_i\} \) such that \( a_i \geq 0 \) and \( \sum a_i = 1 \), the finite form is:

\[
\phi \left( \sum_{i=1}^n a_i x_i \right) \leq \sum_{i=1}^n a_i \phi(x_i).
\]

- For **concave functions**, the inequality reverses.  
- **Equality** occurs when \( x_1 = x_2 = \cdots = x_n \) or \( \phi \) is linear over \( \{x_i\} \).

---

## **Intuition**

Think of a **convex function** as one that "stretches" values away from their average. Let \( X \) be a random variable and \( \phi \) a convex function:

1. **Compute \( \mathbb{E}[X] \):** the mean of \( X \).  
2. **Transform the mean:** \( \phi(\mathbb{E}[X]) \).  
3. **Compare expectations:** \( \mathbb{E}[\phi(X)] \) vs. \( \phi(\mathbb{E}[X]) \).  

Jensen's Inequality states:
\[
\phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)].
\]

- The convex function amplifies deviations of \( X \) from its mean.  
- Thus, \( \mathbb{E}[\phi(X)] \), which aggregates these amplified values, is larger.

---

## **Graphical Insight**

Visualize a convex curve \( \phi(x) \):

- For points \( x_1 \) and \( x_2 \), the **secant line** connecting \( (\phi(x_1), \phi(x_2)) \) lies above the curve.  
- Weighted averages of \( x_1 \) and \( x_2 \) (convex combinations) map **below** this secant line when evaluated through \( \phi \).

This geometric property explains why \( \phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)] \).

---

## **Applications**

### **1. Probability and Statistics**

For a random variable \( X \) and convex \( \phi \):
\[
\phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)].
\]

- **Variational Bayesian methods:** This bounds difficult-to-compute integrals.  

---

### **2. Information Theory**

Applying \( \phi(x) = -\log(x) \) leads to **Gibbs' Inequality**:
\[
\mathbb{E}[-\log(X)] \geq -\log(\mathbb{E}[X]).
\]

This is fundamental to **entropy** and **Kullback-Leibler divergence**.

---

### **3. Statistical Physics**

For \( \phi(x) = e^x \):
\[
e^{\mathbb{E}[X]} \leq \mathbb{E}[e^X].
\]

This is crucial for **partition functions** and **free energy** computations.

---

### **4. Economics: Risk Aversion**

For a **concave utility function** \( u(x) \):
\[
u(\mathbb{E}[X]) \geq \mathbb{E}[u(X)].
\]

This models **risk-averse behavior**: preferring the expected value of a gamble over the gamble itself.

---

## **Example: AM-GM Inequality**

The **Arithmetic-Mean/Geometric-Mean (AM-GM) inequality** states:
\[
\frac{x_1 + x_2 + \dots + x_n}{n} \geq \sqrt[n]{x_1 x_2 \dots x_n}.
\]

### Proof via Jensen's Inequality:

- Let \( \phi(x) = \log(x) \) (concave function).  
- Jensen's Inequality yields:
\[
\log \left( \frac{x_1 + x_2 + \dots + x_n}{n} \right) \geq \frac{1}{n} \sum_{i=1}^n \log(x_i).
\]
- Exponentiating gives:
\[
\frac{x_1 + x_2 + \dots + x_n}{n} \geq \sqrt[n]{x_1 x_2 \dots x_n}.
\]

---

## **Closing Thoughts**

Jensen’s Inequality is simple yet powerful, serving as a bridge between **convexity** and real-world phenomena. Its applications span disciplines, making it an indispensable tool for mathematicians, data scientists, and economists.

Stay tuned for **future posts** exploring its role in **diffusion models** and other advanced topics!!
