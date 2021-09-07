import Student from '../models/Aluno';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não foi fornecido'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['O aluno não existe'],
        });
      }
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não foi fornecido'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['O aluno não existe'],
        });
      }
      await Student.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não foi fornecido'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['O aluno não existe'],
        });
      }
      const studentUpdated = await Student.update(req.body);
      return res.json(studentUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
