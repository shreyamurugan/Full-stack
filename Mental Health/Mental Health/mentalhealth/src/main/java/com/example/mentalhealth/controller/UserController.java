package com.example.mentalhealth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.mentalhealth.model.Login;
import com.example.mentalhealth.service.LoginService;

import java.util.List;
import java.util.Map;
import java.time.LocalDate;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/add")
    public ResponseEntity<?> registerUser(@RequestBody Login login) {
        System.out.println("Checking username: " + login.getUsername());
        System.out.println("Checking email: " + login.getEmail());

        if (loginService.emailExists(login.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Email already exists"));
        }
        if (!isValidPassword(login.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Invalid password format"));
        }

        // Ensure registration date is set
        login.setRegisteredDate(LocalDate.now());

        Login newLogin = loginService.createLogin(login);

        // Include age in the response
        Map<String, Object> response = Map.of(
            "success", true,
            "message", "Registration successful",
            "user", newLogin,
            "age", newLogin.getAge()
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Login>> getAllPatients() {
        List<Login> patients = loginService.getAllUsers();
        return ResponseEntity.ok(patients);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Login login) {
        boolean authenticated = loginService.authenticate(login.getEmail(), login.getPassword());
        if (authenticated) {
            return ResponseEntity.ok(Map.of("success", true, "message", "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("success", false, "message", "Invalid email or password"));
        }
    }

    private boolean isValidPassword(String password) {
        if (password.length() < 8) return false;
        if (!password.matches(".*[A-Z].*")) return false;
        if (!password.matches(".*[a-z].*")) return false;
        if (!password.matches(".*[0-9].*")) return false;
        if (!password.matches(".*[!@#$%^&*(),.?\":{}|<>].*")) return false;
        return true;
    }
}
