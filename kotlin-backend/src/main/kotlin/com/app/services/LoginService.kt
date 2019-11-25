package com.app.services

import com.app.entities.LoginRequest
import com.app.misc.getHash
import org.springframework.stereotype.Service


@Service
class LoginService {

    val user: String = "adrian"
    val password: String = "B30521BDFB35CED5F587CB61DED9C5E5131BCF401ADFC25087797C4B504429F3D969D185C685AE98C879CFE8391DB9A2867BB62CC06BB60D6EBB2F8688FAFA6D" //hicaniin?

    fun validateRequest(loginRequest: LoginRequest): Boolean =
        validateUser(loginRequest.user) && validatePassword(getHash(loginRequest.password))

    fun validateUser(user: String): Boolean = user == this.user
    fun validatePassword(password: String): Boolean = password == this.password
}