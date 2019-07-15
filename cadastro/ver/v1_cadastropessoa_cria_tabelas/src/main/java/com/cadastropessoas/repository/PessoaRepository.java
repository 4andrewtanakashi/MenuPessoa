package com.cadastropessoas.repository;

import com.cadastropessoas.models.Pessoa;
import org.springframework.data.repository.CrudRepository;
										
public interface PessoaRepository extends CrudRepository<Pessoa, String> {

}
