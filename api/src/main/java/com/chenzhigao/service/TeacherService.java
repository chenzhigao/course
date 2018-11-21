package com.chenzhigao.service;

import com.chenzhigao.repository.Teacher;

import java.security.SecureRandom;

/**
 * 教师
 */
public interface TeacherService {
    String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    SecureRandom rnd = new SecureRandom();
    String TEACHER_ID = "teacherId";

    /**
     * 更新教师
     * @param id
     * @param teacher
     */
    void update(Long id, Teacher teacher);
    Teacher getOneSavedTeacher();

    void delete(Long id);

    /**
     * 用户登陆
     * @param teacher
     * @return
     */
    boolean login(Teacher teacher);



}
