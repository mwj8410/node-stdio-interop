package main

import (
    "bufio"
    "fmt"
    "os"
    "time"
)

func main() {

    var count = 0

    reader := bufio.NewReader(os.Stdin)
    //
    for count < 1 {
        message, _ := reader.ReadString('\n')
        if (len(message) > 0) {
            fmt.Printf("Go Received: %s", message)
        }
        time.Sleep(10 * time.Millisecond)
    }
}
