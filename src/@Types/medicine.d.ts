declare module medicineInfo {
    export interface Info {
        data: Data
        success: boolean
        errorMessage: string
    }

    export interface PageData {
        list: Medicine[]
        current: number
        pageSize: number
        total: number
    }

    export interface Medicine {
        id: string
        name: string
        desc: string
        image: string
        createdAt: string
        updatedAt: string
        medicineCategoryId: any
    }
}
