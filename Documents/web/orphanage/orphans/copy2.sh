#!/bin/bash
d="_d"
for i in `seq 1 42`;
do
    cp $i.png depressed
    mv depressed/$i.png depressed/$i$d.png
    echo $i
done