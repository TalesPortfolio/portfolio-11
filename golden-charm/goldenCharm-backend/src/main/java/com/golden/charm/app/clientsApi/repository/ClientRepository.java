package com.golden.charm.app.clientsApi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.golden.charm.app.clientsApi.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    //tras uma lista de clientes comos nomes iguais
    List<Client> findByName(String name);

    Optional<Client> findByEmail(String email);
    
    Optional<Client> findByTel(String tel);


}
