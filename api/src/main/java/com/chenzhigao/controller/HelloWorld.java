package com.chenzhigao.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
    @RequestMapping("/helloWorld")
    public SayHello say(){
        SayHello sayHello = new SayHello();
        sayHello.setValue("hello api");
        return sayHello;
    }

    // 定义一个静态内部类sayHello
    public static class SayHello {
        private String value;
        public String getValue(){
            return value;
        }
        public void setValue(String value){
            this.value = value;
        }
    }
}
