---
slug: "/slsa-supply-chain-levels-compliance-for-software-artifacts"
title: "SLSA ・ Supply-chain Levels for Software Artifacts"
sidebar_label: "SLSA"
---

# SLSA: Your Blueprint for Securing the Software Supply Chain

Ever wonder how to stop supply chain attacks like SolarWinds or Log4Shell in their tracks? Enter **Supply-chain Levels for Software Artifacts**, or **[SLSA](https://slsa.dev/)** _(pronounced "salsa")_. This framework is your recipe for hardening the software you build, deliver, and consume—step by step.

[Created by Google](https://security.googleblog.com/2021/06/introducing-slsa-end-to-end-framework.html) and supported by the [Open Source Software Security Foundation](https://openssf.org/), SLSA is the industry's answer to supply chain chaos. With four progressive levels, it helps you secure your software artifacts from tampering and build trust with end users.

is a vendor-neutral security framework that provides guidance on building and delivering software securely. Supported by the [Open Source Software Security Foundation](https://openssf.org/), SLSA consists of a specification that developers can reference when identifying areas of potential improvement. It was [created by Google in 2021](https://security.googleblog.com/2021/06/introducing-slsa-end-to-end-framework.html) to help software developers fortify their supply chain security by incorporating the best industry practices end-to-end. It also enables consumers to better evaluate the software they adopt, before they adopt it.

## Why does SLSA matter?

Software supply chains are more vulnerable than ever:
- Dependencies sneak in unnoticed.
- Build environments are ripe for tampering.
- Provenance (the “who, what, where” of your code) is often nonexistent.

SLSA fixes these issues by providing a ladder of security maturity. Whether you're a developer or an organization, each level of SLSA improves your security posture.

## SLSA Levels & Tracks

SLSA is divided into four different **[levels](https://slsa.dev/spec/v1.0/levels)**. Each level within a track measures a particular aspect of supply chain security (e.g. build, source, dependencies).

Levels are further broken up into their own tracks, each expanding on the previous.  The idea is that, as your security posture matures, you work your way up through the different levels, like a ladder.

- **Levels** define the overall maturity of your security practices.
- **Tracks** identify specific areas of improvement (i.e. "source" ensures code integrity, while "build" ensures artifact integrity).


### SLSA Level 0: The Starting Line

This is the Wild West of software development, where most software starts. No automation, no reproducibility, no trust. It’s like baking a cake without writing down the recipe—you might get something tasty once, but good luck doing it again the same way.

The build process might be manual, dependencies aren't tracked, and there's no way to verify the integrity of your artifacts.

- Risk: Tampering is undetectable, and no one knows how your software was built.
- Goal: Recognize this as the starting point and commit to improvement.

### SLSA Level 1

The main focus of Level 1 is on automation, as manual processes are error-prone. It requires the build process to be fully scripted, meaning no manual, ad hoc commands. This ensures the builds are at least reproducible.

Requirements:
- A defined build process (e.g. CI/CD pipelines).
- Artifacts can be recreated reliably.

Example: Running `make` commands directly on your local machine and manually uploading binaries to a server.

Example tools might include Jenkins, GitHub Actions, or GitLab CI.

:::tip[Did you know?]

SLSA L1 is achievable for many teams with minimal effort—if you're using CI/CD pipelines, you might already be there!

:::

SLSA L1 is a means to an end, and should be seen as a stepping stone towards improving your overall approach to security. 


### SLSA Level 2: Provenance Proofs

Level 2 introduces the concept of [provenance](/what-is-software-provenance-and-why-is-it-important-for-security), a verifiable statement of what, how, and where something was built. Build systems must generate signed provenance documents.

Builds must be performed in a secure environment that prevents tampering, which involves using isolated, authenticated systems (e.g. hardened CI/CD environments).

### SLSA Level 3: Fully Fortified

This is the gold standard. At Level 3:
- Builds are hermetic (completely isolated from the outside world).
- Dependencies are verified and controlled.
- Build environments are hardened to prevent tampering.

Additional practices include:
- Two-person review for every change.
- Strict control over source and dependencies. 
- Requirements:
  - All Level 2 controls.
  - Builds must be tamper-proof and reproducible in a hermetic environment. 
- Example Tools:
  - Containerized builds (e.g., using Docker or Bazel).
  - Cloud-native build systems like GCP Cloud Build or AWS CodeBuild.

This level adds two-person review for all changes and hermetic builds, meaning builds are completely isolated from the outside world. Every dependency must be verified.



