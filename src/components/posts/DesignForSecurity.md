# Design For Security
## Overview

Designing a system or application for security involves incorporating security considerations into the design process from the very beginning, in order to prevent vulnerabilities from arising in the first place. Thus, *designing for security* refers to the practice of incorporating security considerations into the design and development of a system, product, or service, and can include the use of secure coding practices, threat modeling, and security testing to identify and mitigate potential vulnerabilities.

In this blog, I explore how designing for security makes a system more resilient to attack and protects the confidentiality, integrity, and availability of the data and resources that it processes. I address why an important aspect of overall security strategy is to implement these measures throughout the entire development life cycle.

## How to Design for Security

Designing for security involves incorporating security considerations into the design of systems and software from the beginning of the development process. This approach can help to prevent vulnerabilities from arising in the first place, making it more difficult for attackers to exploit them.

Here are measures to take in designing for security:

- *Use a threat modeling methodology.* Identify the potential threats to a system or application and design the system to mitigate or eliminate those threats. Use a threat modeling methodology such as STRIDE to identify and evaluate potential security threats.
- *Use secure design patterns.* Use design patterns that have been proven to be secure, such as the principle of least privilege, to ensure that systems and software are designed with security in mind.
- *Use secure communication protocols.* Use secure communication protocols such as HTTPS to protect the integrity of data transmitted over the network.
- *Use encryption: Use encryption to protect sensitive data, both at rest and in transit, to protect it from unauthorized access and disclosure.
- *Use secure development methodologies.* Use secure development methodologies such as OWASP (Open Web Application Security Project) to ensure that secure coding practices are followed throughout the development process.
- *Incorporate security testing.* Incorporate security testing into the development process to identify and address vulnerabilities early on.
- *Use secure configuration.* Ensure that systems and software are configured securely to prevent unauthorized access and elevation of privilege.
- *Conduct regular security assessments.* Regularly assess the security of your systems and networks to identify and address potential vulnerabilities.

## STRIDE Threat Modeling

The [STRIDE](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats#stride-model) methodology for threat modeling provides a sound approach for preventing most security issues. Each letter of the STRIDE nomenclature - which stands for Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege - represents a specific type of security threat that can be mitigated through appropriate security controls.

![STRIDE](img/STRIDE_ThreatModel.png)

Let's explore how each component of this modeling methodology contributes to identifying and evaluating potential security threats to a system or application.

### Spoofing

Spoofing refers to the act of pretending to be someone else in order to gain unauthorized access to information or resources.

For example, an attacker may use spoofed email addresses or phone numbers to impersonate a legitimate user and gain access to sensitive information. Another
example of API spoofing would be an attacker who creates a fake API that mimics a legitimate API, and then tricks users into interacting with the fake API. The attacker could then use the fake API to steal sensitive information or perform unauthorized actions.

To prevent spoofing, we can implement these security measures:

- *Implement user authentication.* Use secure authentication methods such as two-factor authentication to ensure that only authorized users can access resources. Use secure authentication methods such as OAuth and JWT to ensure that only authorized users can access the API. Use role-based access controls to ensure that users have the minimum level of access necessary to perform their job.
- *Validate input.* Validate all input data to ensure that it is coming from a trusted source and that it is in the correct format, to prevent attackers from injecting malicious data.
- *Use encryption.* Use Secure Sockets Layer (SSL) or Transport Layer Security (TLS)
encryption to protect sensitive data, both at rest and in transit, to protect it from unauthorized access and disclosure.
- *Use anti-spoofing technologies.* Implement anti-spoofing technologies such as Sender Policy Framework (SPF) and Domain-based Message Authentication, Reporting & Conformance (DMARC) to verify the authenticity of incoming emails and prevent email spoofing.
- *Use network security.* Implement network security measures such as firewalls, intrusion detection and prevention systems to prevent unauthorized access to resources.
- *Use secure communication protocols.* Use secure communication protocols such as HTTPS to protect the integrity of data transmitted over the network.
- *Use API Gateway.* Use API Gateway to provide a single-entry point for API access and to perform security-related tasks such as authentication, access control, and rate limiting.
- *Use API Management.* Use API management platform to create and manage API policies, to ensure.
- *Use a web application firewall (WAF) to detect and prevent malicious requests.*
- *Use a CAPTCHA system to block automated bots and scripts which can be used to spoof.*

### Tampering

Tampering refers to an attacker modifying the communication between an application and an API in order to perform unauthorized actions or gain access to sensitive data. Tampering can have serious consequences that include data loss, system downtime, and loss of trust in the system.

An example of tampering would be for an attacker to intercept a communication between an application and an API, and alter the request to gain unauthorized access to sensitive data or perform unauthorized actions; in such a case, the attacker might intercept a request to retrieve a user's account balance and alter the request to transfer money from the account. Another example of tampering would be for the attacker to intercept a network communication and alter the data being transmitted; the purpose of this action would be to disrupt the communication or change the meaning of the data being transmitted.

To prevent tampering, we can implement these security measures:

- *Use digital signatures and non-repudiation techniques.* Use digital signatures and other non-repudiation techniques such as time-stamping to prove the authenticity and integrity of a transaction.
- *Use secure communication protocols.* Use secure communication protocols such as HTTPS to protect the integrity of data transmitted over the network.
- *Use tamper-proofing techniques.* Implement tamper-proofing techniques such as code signing and digital certificates to protect software and firmware from unauthorized modification.
- *Use version control.* Use version control systems to track changes to software and configuration files, and to ensure that only authorized changes are made.
- *Regularly backup data.* Regularly backup critical data and store it in a secure location, to restore data in the event of tampering.
- *Use of checksums and hashes to validate the integrity of the data.*
- *Using message authentication codes (MACs) or digital signatures to ensure the integrity of the data being transmitted.* This would allow the receiver to verify that the data has not been tampered with during transit.
- *Using access control mechanisms such as role-based access control (RBAC) or attribute-based access control (ABAC) to restrict access to sensitive data.*

### Repudiation

Repudiation refers to the ability of a user or attacker to deny having performed a specific action or transaction. This can have serious consequences, including financial losses, legal disputes, and damage to an organization's reputation.

An example of repudiation would be for an attacker to successfully gain access to a user's account in an online banking system and make unauthorized transactions; the attacker could then deny having made the transactions, and the victim would be held liable for the unauthorized actions. Another example of repudiation would be an employee denying having sent a confidential email, even though the forged email can be traced back to their account.

To prevent repudiation, we can implement these security measures:

- *Logging and Auditing.* Maintain a detailed log of all actions taken within the system. This will help to trace back any suspicious activity and to identify the user who performed the action. Implement automated auditing to regularly review the logs for any suspicious activity. Additionally, it's important to keep the logs and audit trails in a secure location and have a retention policy to keep them for a certain period of time, to be able to use them as evidence if needed.
- *Use an intrusion detection system (IDS) to detect and alert on any unauthorized access or tampering attempts.*
- *Use multifactor authentication.* Use multifactor authentication methods to increase the difficulty of impersonating a user and to make it harder for a user to deny performing an action.
- *Use tamper-proofing techniques.* Implement tamper-proofing techniques such as code signing and digital certificates to protect software and firmware from unauthorized modification.
- *Implement authentication and access controls.* Use secure authentication methods such as two-factor authentication to ensure that only authorized users can access resources, and limit access to sensitive data and resources to only those who need it.
- *Use digital signatures and non-repudiation techniques.* Use digital signatures and other non-repudiation techniques such as time-stamping to prove the authenticity and integrity of a transaction.

### Information disclosure

Information disclosure involves the exposure of information to individuals who are not supposed to have access to it. This can include sensitive information such as login credentials, personal information, or confidential business information.

An example of information disclosure would be for an attacker to gain access to a database containing sensitive information such as customer data or financial records; the attacker could then exfiltrate or publish this data. Another example of information disclosure would be for an attacker to intercept network communication and read the data being transmitted.

To prevent information disclosure, we can implement these security measures:

- *Use data loss prevention (DLP) solutions.* Use DLP solutions to prevent sensitive data from being exfiltrated or leaked.
- *Implement access controls.* Limit access to sensitive data and resources to only those who need it and use role-based access controls to ensure that users have the minimum level of access necessary to perform their job.
- *Use network security.* Implement network security measures such as firewalls, intrusion detection and prevention systems to prevent unauthorized access to resources.
- *Use encryption.* Encrypt sensitive data, both at rest and in transit, to protect it from unauthorized access and disclosure.
- *Use secure coding practices.* Implement secure coding practices and conduct code reviews to identify and remediate potential vulnerabilities.

### Denial of Service

Denial of service (DoS) attacks aim to make a system or network unavailable to its intended users by overwhelming it with a large amount of traffic or requests.

An example of a DoS attack would be a distributed denial of service (DDoS) attack, where the attacker uses a network of compromised devices to flood a target server or network with a large amount of traffic, making it unavailable to legitimate users. Another example of a DoS attack would be a resource depletion attack, where the attacker floods a targeted server with many requests, overwhelming its resources and making it unavailable.

To prevent denial of service, we can implement these security measures:

- *Use network security devices.* Implement network security devices such as firewalls and intrusion prevention systems to filter and block malicious traffic.
- *Use DDoS mitigation services.* Use DDoS mitigation services to protect against DDoS attacks.
- *Implement rate limiting.* Implement rate limiting to prevent resource depletion attacks by limiting the number of requests a user or IP address can make to the system.
- *Use Content Delivery Network (CDN).* Use Content Delivery Network (CDN) to distribute the traffic over many servers, making it difficult for an attacker to target a specific server.
- *Have an incident response plan.* Have an incident response plan in place to quickly respond to a DoS attack and minimize the impact.

### Elevation of privilege / Enable least privilege

When an attacker gains access to a higher level of permissions than they are supposed to have, it can allow them to perform actions that would normally be restricted, such as modifying or deleting sensitive data or gaining access to restricted resources.

An example of an elevation of privilege attack would be for an attacker to exploit a vulnerability in a web application or an API to gain access to the underlying operating system and execute arbitrary code with elevated privileges. Another example of an elevation of privilege attack would be for an attacker to gain access to an administrator's account, then use that account to gain access to restricted resources or perform actions that would normally be restricted.

To prevent elevation of privilege attacks, we can implement these security measures:

- *Implement Least Privilege.* Limit access to sensitive data and resources to only those who need it and use role-based access controls to ensure that users have the minimum level of access necessary to perform their job.
- *Use input validation.* Validate all input data to ensure that it is coming from a trusted source and that it is in the correct format, to prevent attackers from injecting malicious data.
- *Use anti-malware and endpoint protection.* Use anti-malware and endpoint protection to protect against malware and other malicious software.
- *Use Secure Coding practices.* Implement secure coding practices and conduct code reviews to identify and remediate potential vulnerabilities.
- *Use Secure Configuration.* Ensure that systems and software are configured securely to prevent unauthorized access and elevation of privilege.
- *Use Security by Design.* Incorporate security considerations into the design of systems and software to prevent vulnerabilities from arising in the first place.

## Conclusion

It is important to note that no system can be made completely secure, but by using STRIDE methodologies to identify the threat and implement the appropriate security controls, the risk can be reduced to an acceptable level. In general, to create more secure systems or applications:

- Encrypt sensitive data, both at rest and in transit to protect them from unauthorized access and tampering.
- Conduct code reviews using [OWASP Top 10 Security Risks](https://owasp.org/www-project-top-ten/) to identify and remediate potential vulnerabilities.
- Validate all input data to ensure that it is coming from a trusted source and that it is in the correct format, to prevent attackers from injecting malicious data.
- Regularly monitor your system for suspicious activity and perform regular security testing to identify and address potential vulnerabilities.
- Keep software and libraries up to date to ensure that any known vulnerabilities are patched. Train your team about the risks of repudiation and the steps they can take to prevent it.
- Regularly assess the security of your systems and networks to identify and address potential vulnerabilities.


## Additional resources

- [OWASP Top 10 Security Risks](https://owasp.org/www-project-top-ten/)
- [OWASP DEV Guide](https://github.com/OWASP/DevGuide/blob/master/02-Design/01-Principles%20of%20Security%20Engineering.md)
- [Security Design Principles](https://www.ncsc.gov.uk/collection/cyber-security-design-principles/cyber-security-design-principles)
