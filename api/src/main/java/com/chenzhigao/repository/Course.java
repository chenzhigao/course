package com.chenzhigao.repository;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private int courseState;
    private Date courseDate;
    private int jieci;
    private String jiaoshi;

  public Course(String name, int courseState, Date courseDate, int jieci, String jiaoshi) {
    this.name = name;
    this.courseState = courseState;
    this.courseDate = courseDate;
    this.jieci = jieci;
    this.jiaoshi = jiaoshi;
  }

  public Course() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getCourseState() {
    return courseState;
  }

  public void setCourseState(int courseState) {
    this.courseState = courseState;
  }

  public Date getCourseDate() {
    return courseDate;
  }

  public void setCourseDate(Date courseDate) {
    this.courseDate = courseDate;
  }

  public int getJieci() {
    return jieci;
  }

  public void setJieci(int jieci) {
    this.jieci = jieci;
  }

  public String getJiaoshi() {
    return jiaoshi;
  }

  public void setJiaoshi(String jiaoshi) {
    this.jiaoshi = jiaoshi;
  }

  @Override
  public String toString() {
    return "Course{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", courseState=" + courseState +
      ", courseDate=" + courseDate +
      ", jieci=" + jieci +
      ", jiaoshi='" + jiaoshi + '\'' +
      '}';
  }
}
