#!/bin/bash
c="_c"
for i in `seq 1 42`;
do
    cp $i.png crying
    mv crying/$i.png crying/$i$c.png
    echo $i
done