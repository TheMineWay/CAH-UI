import { useForm } from "antd/lib/form/Form";
import { RequestMethod } from "./Requester";
import useRequest from "./useRequest";

export default function useRequestForm<T>(path: string, opts: {
    validator?: (values: T) => boolean;
    method?: RequestMethod;
}) {

    const [form] = useForm<T>();

    const {
        request,
        clear,
    } = useRequest<T>({
        path,
        method: opts.method || 'post',
    });

    const reset = () => {
        clear();
        form.resetFields();
    }

    const submit = async (values: T) => {

        if(opts.validator) {
            const valid = opts.validator(values);
            if(!valid) throw new Error(); // <-- Validation failed
        }

        await request({
            body: values,
        });
    }

    return {
        resetFields: form.resetFields,
        reset,
        resetState: clear,
        submit,
        form,
    };
}