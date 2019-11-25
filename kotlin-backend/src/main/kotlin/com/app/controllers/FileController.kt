package com.app.controllers

import org.springframework.core.io.InputStreamResource
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.File
import java.io.FileInputStream


@CrossOrigin
@RestController
@RequestMapping("/file")
class FileController {

    val PATH_FILE: String = "src/main/kotlin/com/app/log/myApp.log"

    @GetMapping
    fun getFile():ResponseEntity<InputStreamResource> {
        val file = File(PATH_FILE)
        val resource =
            InputStreamResource(FileInputStream(file))

        return ResponseEntity.ok()
            .header(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment;filename=" + file.getName()
            )
            .contentType(MediaType.TEXT_XML).contentLength(file.length())
            .body(resource)
    }

}