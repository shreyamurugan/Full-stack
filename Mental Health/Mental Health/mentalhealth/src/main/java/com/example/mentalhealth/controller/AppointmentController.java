package com.example.mentalhealth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.mentalhealth.model.Appointment;
import com.example.mentalhealth.service.AppointmentService;

import java.util.Map;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/add")
    public ResponseEntity<?> addAppointment(@RequestBody Appointment appointment) {
        try {
            if (appointment.getPaymentMethod().equals("creditCard")) {
                if (!appointmentService.isValidCardNumber(appointment.getCardNumber())) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Invalid card number"));
                }
                if (!appointmentService.isValidCardExpiry(appointment.getCardExpiry())) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Invalid card expiry date"));
                }
                if (!appointmentService.isValidCardCvc(appointment.getCardCvc())) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("success", false, "message", "Invalid card CVC"));
                }
            }

            Appointment newAppointment = appointmentService.createAppointment(appointment);

            Map<String, Object> response = Map.of(
                "success", true,
                "message", "Appointment successfully created",
                "appointment", newAppointment
            );

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
