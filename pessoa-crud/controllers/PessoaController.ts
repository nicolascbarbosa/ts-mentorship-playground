class PessoaController {
    private pessoaService: PessoaService;

    constructor() {
        this.pessoaService = new PessoaService();
    }

    public async create(request: Request, response: Response) {
        const pessoa = request.body;
        const pessoaCriada = await this.pessoaService.create(pessoa);
        response.status(201).json(pessoaCriada);
    }

    public async findAll(request: Request, response: Response) {
        const pessoas = await this.pessoaService.findAll();
        response.status(200).json(pessoas);
    }

    public async findById(request: Request, response: Response) {
        const id = parseInt(request.params.id);
        const pessoa = await this.pessoaService.findById(id);
        response.status(200).json(pessoa);
    }

    public async update(request: Request, response: Response) {
        const id = parseInt(request.params.id);
        const pessoa = request.body;
        const pessoaAtualizada = await this.pessoaService.update(id, pessoa);
        response.status(200).json(pessoaAtualizada);
    }

    public async delete(request: Request, response: Response) {
        const id = parseInt(request.params.id);
        await this.pessoaService.delete(id);
        response.status(204).send();
    }
}