package com.app.controllers

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@CrossOrigin
@RestController
class Test {

    @GetMapping("/")
    fun get(@RequestParam(value="value") value: String): String {
        return value
    }


}