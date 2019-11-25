package com.app.controllers

import com.app.entities.LoginRequest
import com.app.log.getLogger
import com.app.services.LoginService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/login")
class LoginController {

    val loginService: LoginService = LoginService()

    @PostMapping
    fun login(@RequestBody request: LoginRequest): ResponseEntity<Any> =
        if (loginService.validateRequest(request)) {
            getLogger("login").info("Log in")
            ResponseEntity.status(HttpStatus.OK).build()
        } else {
            getLogger("login").info("Invalid log")
            ResponseEntity.status(HttpStatus.FORBIDDEN).build()
        }



}