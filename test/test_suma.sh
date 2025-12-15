#!/bin/bash

result=$((2+10))

if [ "$result" -eq 10 ]; then
    echo "El test ha sido exitoso"
    exit 0
else
    echo "Error: el test ha fallado"
    exit 1
fi
