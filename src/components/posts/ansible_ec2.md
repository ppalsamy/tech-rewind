# How to provision, terminate EC2 Instance using Ansible

## Provision EC2

~~~
---
- name: Provision EC2 instance
  hosts:  localhost
  connection: local
  gather_facts: False

  vars:
    region: us-east-1
    instance_type: t2.micro
    ami_id: ami-0c55b159cbfafe1f0
    security-group: my-security-group
    key_name: my-key-pai
    count: 1

  tasks:
    - name: Launch EC2 instance
      ec2:
        region: "{{ region }}"
        instance_type: "{{ instance_type }}"
        image: "{{ ami_id }}"
        key_name: "{{ key_name }}"
        group: "{{ security_group }}"
        count: "{{ count }}"
        wait: true
        vpc_subnet_id: "subnet-123456"
        assign_public_ip: true
        instance_tags:
          Name: "MyInstance"
      register: ec2
~~~


The `wait` parameter tells Ansible to wait until the instance is up and running before moving on to the next task.

Then `register` the instance with Ansible using the `add_host` module, which allows us to add the instance to a host group (ec2)

Run this command in cli to provision EC2 instance
``` $ ansible-playbook aws_ec2_provision.yaml ```

we can have multiple tasks such as 
  1. launch ec2 
  2. add instance to host group
  3. wait for SSH to come up

Each tasks can be run separately with –start-at-task=“add instance to host group”.  task "launch ec2" will be skipped. But all the tasks after till end will be executed. 


by default, Ansible will use the 'inventory' file located at '/etc/ansible/hosts'. This file should contain a list of hosts that you want to manage with Ansible. 
Instead of ‘localhost’ in hosts. you can have different file like 'aws_inventory.ini' file with list of hosts servers
e.g:-
[webservers]
web1.discoverfinancial.com
web2.discoverfinancial.com
[database]
db1.discoverfinancial.com

```$ ansible-playbook –i aws_inventory.ini aws_ec2_provision.yaml```

you can specify custom inventory with `-i` option 

## Destroy/Terminate EC2
To destroy the EC2 instane that was created by the Ansible playbook, you can use the 'ec2' module's 'state' parameter with a value of 'absent'.
Here's an example playbook that will terminate the EC2 instance:
~~~
---
- name: Terminate EC2 instance
  hosts:  localhost
  connection: local
  gather_facts: False

  tasks:
    - name: Terminate EC2 instance
      ec2:
        region: us-east-1
        instance_ids: "{{ instance_id }}"
        state: absent

~~~

Run this command in cli to terminate or destroy EC2 instance
``` $ ansible-playbook aws_ec2_destroy.yaml ```

