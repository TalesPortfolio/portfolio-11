import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { GenderEnum, IForm } from "../../../types/formTypes";


interface ClienteState {
    myFormData: IForm | null,
    Lista: IForm[],
    loading: boolean,
    error: String | null;
    success: boolean;
}



const API_URL = "http://localhost:8080/api/clients";

const initialState: ClienteState = {
    myFormData: {
    name:"",
    email:"",
    password:"",
    confirm_Password:"",
    tel:"",
    country: "",
    city:"",
    address:"",
    number: 0,
    gender: GenderEnum.other
    },
    Lista: [],
    loading: false,
    error: null,
    success: false
}


//ADCIONA USUARIO POST
//Devo usar o type IForm a tipagen correta
export const sendToApi = createAsyncThunk<
    IForm,
    IForm,
    { rejectValue: string }
>(
    "clients/sendToApi",
    async (dataForm, thunkAPI) => {
        try {
            //console.log("Dados enviado ", dataForm);

            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(dataForm),
            });
            if (!res.ok) {
                throw new Error("Erro to salve in API");
            }
            const data = await res.json();
            //console.log(data);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
)


const formDataSlice = createSlice({
    name: "slice-form",
    initialState: initialState,
    reducers: {
        upDateRedux: (state, action) => {
            state.myFormData = action.payload;
            console.log("RESULTADO DO SLICE --- ", state.myFormData);
        },
        limparErro(state) {
            state.error = null;
        },
    },
    extraReducers:(build)=>{
        build
        .addCase(sendToApi.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        .addCase(sendToApi.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = null;
            state.success = true;
            state.myFormData = action.payload;
        })
        .addCase(sendToApi.rejected,(state, action)=>{
            state.loading = false;
            state.success = false;

            state.error = (action.payload as String) ??
            action.error.message ??
            "Unknown error, please try again later.";

        })
    }
})

export default formDataSlice.reducer;
export const { upDateRedux } = formDataSlice.actions;
export const { limparErro } = formDataSlice.actions;
export const getDataForm = (state: RootState) => state.form.myFormData
