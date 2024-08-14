package com.example.mentalhealth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mentalhealth.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
