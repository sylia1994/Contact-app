package com.example.ApplicationContact;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.ApplicationContact.Entities.Contact;
import com.example.ApplicationContact.Repository.ContactRepository;
@CrossOrigin


@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	private ContactRepository contactRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df=new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("Hassani","Hassa1",df.parse("22/12/1993"),"hassani1@gmail.com","012364478","dan.jpeg"));
		contactRepository.save(new Contact("Hassani1","Hassa2",df.parse("22/12/1993"),"hassani2@gmail.com","123645548","dan.jpeg"));
		contactRepository.save(new Contact("Hassani2","Hassa3",df.parse("22/12/1993"),"hassani11@gmail.com","5658658","dan.jpeg"));
		contactRepository.save(new Contact("Hassani3","Hassa4",df.parse("22/12/1993"),"hassani3@gmail.com","5648569","dan.jpeg"));
		contactRepository.save(new Contact("Hassani4","Hassa5",df.parse("22/12/1993"),"hassani7@gmail.com","256321456","dan.jpeg"));
		contactRepository.findAll().forEach(c->
		{
		System.out.println(c.getNom());
		});
				
	}

}
