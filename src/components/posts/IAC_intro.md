# Why you should adopt  Infrastructure as code
Traditionally Infrastructure provisioning done manually, need to spend lot of time and effort to provision, manage infrastructure. Due to fast paced technology improvements, we need to provision, manage and maintain much faster. Infrastructure as code come to a rescue to solve this issue. 

In this blog, We will go thru what is an Infrastructure as Code(IAC),  why we need that infrastructure as code and what benefits  it can provide for us and what are the various tools available in the market.

## What is Infrastructure as code

> Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes. - Redhat

Provision and manage your infrastructute thru code instead of manual process. So, you can avoid all the manual human errors, as well you can provision much faster. Because, machines can faster than humans ;). 

Another, one from Terraform Up & Running 
> “Write & execute code to define, deploy, update and destroy your infrastructure” (Yevgeniy Brikman – Terraform: Up & Running)

This is strightforward, write your infrastructure what you desire to see and execute. as simple as that! 
as well, updating your existing infrastructure and destroying your infrastructure. 

So once you have your infrastructure as code, you can apply all the software development practices which industries are following, right? like version control, automation, testing, etc.,
## Two programming approaches
Since, we are talking about Code, let's talk about the approaches for any programming languages follows such as procedural and declarative. 
### Procedural or Imperative
A Procedural approach, you specify the steps that need to be taken to achieve a specific outcome.

Some of the programming languages or tools such as Python, bash and PowerShell scripts follows procedural approach, We need to provide step by step instructructions so they can be executed in the specific order. 

### Declarative
A Declarative approach, you specify what you want to achieve, but not how to achieve it. 

You need to specify what is your end goal or result, you don't need to worry about what's happening internally to achieve that goal or result. Some of the Infrastructure as Code(IAC) tools follows the declarative approach such as Ansible, puppet, chef, terraform, AWS Cloud formation and so many other tools. 

Most of the IAC tools follows declarative approach to provision and manage the infrastructure than procedural or imperative approach.

## Why Infrastructure as code is important

### **Version Control:**
IAC code can be stored in version control systems such as Git, allowing for easy collaboration and tracking of changes to the infrastructure over time. Also Create and release versioned infrastructure.
### **Automation:** 
IAC allows for the automated provisioning and management of infrastructure resources, reducing the need for manual configuration and reducing the risk of human error and don’t forget huge savings of Time & Effort.
### **Reusability:** 
IAC code can be reusable, meaning that the same code can be used to provision resources in multiple environments or across multiple teams, improving consistency and reducing the need to recreate configurations.Well defined terraform will allow creation of consistent infrastructure across environments, whilst still allowing for different scaling in different environments.
### **Scalability:** 
IAC allows for the automatic scaling of resources as needed, improving the ability to handle increased traffic or workloads.
### **Disaster Recovery:** 
IAC allows for quick recovery of resources and environments in the event of a disaster.
### **Compliance:** 
IAC allows for the automatic enforcement of compliance policies and regulations, improving the ability to meet regulatory requirements.
### **Testing:** 
It gives you the ability to define new environments quickly. Either at a named environment, team or developer level. IAC allows for the creation of test environments quickly and easily, reducing the time and cost associated with testing. 

## These are a few popular choices:
- Ansible
- Chef
- Puppet
- Saltstack
- AWS CloudFormation
- Azure Resource Manager
- Terraform 


