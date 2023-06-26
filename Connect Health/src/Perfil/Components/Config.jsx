import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from '@mui/material'

function Config() {
    const [anchorel, setAnchorel] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorel(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorel(null);
    };
    return (
        <div>
            <button onClick={handleMenuOpen}>Configurações</button>
            <Dialog
                anchorel={anchorel}
                open={Boolean(anchorel)}
                onClose={handleMenuClose}
            >

                <DialogTitle>
                    Configurações
                </DialogTitle>
                <DialogContent>
                    <div className="flex flex-col">
                        <div className="flex gap-10">
                            <input className="bg-[#f5f5f5] p-2 rounded-lg outline-0" type="text" placeholder="Editar nome" />
                            <select className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                                id='duracao'

                            >
                                <option value="none">Editar preço consulta </option>
                                <option value="10">R$10</option>
                                <option value="20">R$20</option>
                                <option value="30">R$30</option>
                                <option value="40">R$40</option>
                                <option value="50">R$50</option>
                                <option value="60">R$60</option>
                                <option value="70">R$70</option>
                                <option value="80">R$80</option>
                                <option value="90">R$90</option>
                                <option value="100">R$100</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <select className="w-full border border-gray-300 px-3 py-2 rounded max-md:w-full"
                                id='duracao'

                            >
                                <option value="none">Editar Especialidades</option>
                                <option value="10">Clínica Infantil</option>
                                <option value="20">Clínica</option>
                                <option value="30">Esportiva</option>
                                <option value="40">Materno-Infantil</option>
                                <option value="50">Estética</option>
                                <option value="60">Vegetariana</option>
                                <option value="70">Vegana</option>
                                <option value="80">Geriátrica</option>
                                <option value="90">Transtornos alimentares</option>
                                <option value="100">Saúde mental</option>
                                <option value="100">Desordens hormonais</option>
                                <option value="100">Doenças metábolicas</option>
                                <option value="100">Distúrbios de sono</option>
                                <option value="100">Gastroinstestinal</option>
                                <option value="100">Alergias alimentares</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <textarea className="bg-[#f5f5f5] w-full p-2 resize-none rounded-lg outline-0" name="" id="" cols="40" rows="5" placeholder="Editar Biografia"></textarea>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default Config;