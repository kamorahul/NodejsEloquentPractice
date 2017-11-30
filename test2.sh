#!/bin/bash
mongoexport --db juggernaut-server --collection users -o /home/admin1/Desktop/testcase.txt
tar -czvf backupjuggernaut.tar.gz /home/admin1/Desktop/testcase.txt

