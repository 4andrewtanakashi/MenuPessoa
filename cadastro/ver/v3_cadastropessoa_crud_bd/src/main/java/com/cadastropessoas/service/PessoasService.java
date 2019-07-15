package com.cadastropessoas.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastropessoas.models.Pessoa;
import com.cadastropessoas.repository.PessoaRepository;


@Service
public class PessoasService {
	private static List<Pessoa> pessoasLista = new ArrayList<>();
	private static long idCounter = 0;

	@Autowired
	private PessoaRepository pessoaRepos;
	
	static {
		pessoasLista.add(new Pessoa(++idCounter, "Mr.X", "Tyrant"));
		pessoasLista.add(new Pessoa(++idCounter, "Nemesis", "1998 Tyrant T-Alpha"));
		pessoasLista.add(new Pessoa(++idCounter, "Neptube", "1998 Shark with virus"));
	}
	
	public List<Pessoa> findAll() {
		if (pessoaRepos.count() == 0) {
			for (Pessoa pessoa :  pessoasLista) {
				pessoaRepos.save(pessoa);
			}
		}
		
		return (List<Pessoa>) pessoaRepos.findAll();
	}
	
	public Pessoa salvar (Pessoa pessoa) {
		if (pessoa.getId() == -1 || pessoa.getId() == 0) {
			pessoa.setId(++idCounter);
			
			pessoaRepos.save(pessoa);
			
		} else {
			pessoaRepos.deleteById(pessoa.getId());
			pessoaRepos.save(pessoa);
		}
		return pessoa;
	}
	
	public Pessoa deleteById (long id) {
		Pessoa pessoa = findById(id);
		
		if (pessoa == null)
			return null;
		
		if (pessoasLista.remove(pessoa))
			return pessoa;
		
		return null;
	}
	
	
	public Pessoa findById (long id) {
		return pessoaRepos.findById(id).get();
	}

}
