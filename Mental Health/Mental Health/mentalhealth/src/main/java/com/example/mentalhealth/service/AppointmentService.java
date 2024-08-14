package com.example.mentalhealth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mentalhealth.model.Appointment;
import com.example.mentalhealth.model.Login;
import com.example.mentalhealth.repository.AppointmentRepository;
import com.example.mentalhealth.repository.LoginRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private LoginRepository loginRepository;

    public Appointment createAppointment(Appointment appointment) {
        // Fetch user details using email
        Login user = loginRepository.findByEmail(appointment.getEmail());
        if (user != null) {
            appointment.setName(user.getUsername());
            appointment.setPhone(user.getPhonenumber());
        } else {
            throw new RuntimeException("User not found with email: " + appointment.getEmail());
        }

        return appointmentRepository.save(appointment);
    }

    public boolean isValidCardNumber(String cardNumber) {
        return cardNumber.matches("\\d{16}");
    }

    public boolean isValidCardExpiry(String cardExpiry) {
        return cardExpiry.matches("\\d{2}/\\d{2}");
    }

    public boolean isValidCardCvc(String cardCvc) {
        return cardCvc.matches("\\d{3}");
    }
}
