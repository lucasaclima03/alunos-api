import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Camila',
      sobrenome: 'Barbosa',
      email: 'camila@teste',
      idade: 24,
      peso: 68,
      altura: 1.75,
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
