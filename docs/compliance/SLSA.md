---
slug: "/slsa-supply-chain-levels-compliance-for-software-artifacts"
title: "SLSA ・ Supply-chain Levels for Software Artifacts"
sidebar_label: ""
---

# SLSA

**Supply-chain Levels for Software Artifacts**, or **[SLSA](https://slsa.dev/)** _(pronounced "salsa")_, is a vendor-neutral security framework that provides guidance on building and delivering software securely. Supported by the [Open Source Software Security Foundation](https://openssf.org/), SLSA consists of a specification that developers can reference when identifying areas of potential improvement. It was [created by Google in 2021](https://security.googleblog.com/2021/06/introducing-slsa-end-to-end-framework.html) to help software developers fortify their supply chain security by incorporating the best industry practices end-to-end. It also enables consumers to better evaluate the software they adopt, before they adopt it.

SLSA is divided into different tracks and [levels](https://slsa.dev/spec/v1.0/levels), each expanding on the previous. The idea is that, as your security posture matures, you make your way up through the different levels, much like a ladder.

## SLSA Level 1: Build Basics

The main focus of Level 1 is on automation, as manual processes are error-prone. It requires the build process to be fully scripted, meaning no manual, ad hoc commands. This ensures the builds are at least reproducible.

:::tip[Did you know?]

SLSA 1 is achievable for many teams with minimal effort—if you're using CI/CD pipelines, you might already be there!

:::


## SLSA Level 2: Provenance Proofs

Level 2 introduces the concept of [provenance](/what-is-software-provenance-and-why-is-it-important-for-security), a verifiable statement of what, how, and where something was built. Build systems must generate signed provenance documents.

## SLSA Level 3: Tamper Resistance

Builds must be performed in a secure environment that prevents tampering. This involves using isolated, authenticated systems (e.g. hardened CI/CD environments).

## SLSA Level 4: Fully Fortified

This level adds two-person review for all changes and hermetic builds, meaning builds are completely isolated from the outside world. Every dependency must be verified.

