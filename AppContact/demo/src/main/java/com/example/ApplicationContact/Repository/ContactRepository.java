package com.example.ApplicationContact.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.ApplicationContact.Entities.Contact;
@CrossOrigin

public interface ContactRepository extends JpaRepository<Contact, Long> {
	@Query("select c from Contact c where c.nom like:x")
	public Page<Contact> chercher(@Param("x")String mc,Pageable pageable);
}
