package com.chenzhigao.controller;


import com.chenzhigao.repository.Term;
import com.chenzhigao.repository.TermRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Term")
public class TermController {
  @Autowired
  private TermRepository termRepository;

  @GetMapping("")
  public List<Term> getAll(){
    List<Term> terms = (List<Term>) termRepository.findAll();
    return terms;
  }
}
