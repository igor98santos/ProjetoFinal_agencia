package com.teste.axios.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teste.axios.entitiy.PessoaEntity;
@Repository
public interface PessoaRepository  extends JpaRepository<PessoaEntity, Long>{
	
}
