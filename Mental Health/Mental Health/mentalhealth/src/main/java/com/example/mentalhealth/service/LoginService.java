package com.example.mentalhealth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mentalhealth.repository.LoginRepository;
import com.example.mentalhealth.model.Login;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login createLogin(Login login) {
        return loginRepository.save(login);
    }

    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    public Optional<Login> getLoginById(Long id) {
        return loginRepository.findById(id);
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }

    public Login updateLogin(Login login) {
        return loginRepository.save(login);
    }

    public Login findByUsername(String username) {
        return loginRepository.findByUsername(username);
    }

    public Login findByEmail(String email) {
        return loginRepository.findByEmail(email);
    }

    public boolean usernameExists(String username) {
        return loginRepository.findByUsername(username) != null;
    }

    public List<Login> getAllUsers() {
        return loginRepository.findAll();
    }

    public boolean emailExists(String email) {
        return loginRepository.findByEmail(email) != null;
    }

    public boolean authenticate(String email, String password) {
        Login user = loginRepository.findByEmail(email);
        if (user != null) {
            // Replace with real password check
            return user.getPassword().equals(password);
        }
        return false;
    }
}
